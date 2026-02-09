import { growthTips, checklists } from '@/content/growthGuidance';
import { platformTips, faqs } from '@/content/siteContent';
import { broadTopicGuidance } from '@/content/broadTopicGuidance';
import { contentTypeGuidance } from '@/content/contentTypeGuidance';

export interface SearchResult {
  id: string;
  type: 'growth-tip' | 'checklist' | 'platform-tip' | 'faq' | 'broad-guidance' | 'content-type-guidance';
  title: string;
  snippet: string;
  section: string;
  platform?: string;
  targetId: string;
}

function normalizeText(text: string): string {
  return text.toLowerCase().trim();
}

function tokenize(text: string): string[] {
  return normalizeText(text).split(/\s+/).filter(token => token.length > 0);
}

function calculateRelevanceScore(text: string, queryTokens: string[]): number {
  const textTokens = tokenize(text);
  const normalizedText = normalizeText(text);
  
  let score = 0;
  
  // Exact phrase match gets highest score
  const fullQuery = queryTokens.join(' ');
  if (normalizedText.includes(fullQuery)) {
    score += 100;
  }
  
  // Individual token matches
  queryTokens.forEach(queryToken => {
    textTokens.forEach(textToken => {
      if (textToken === queryToken) {
        score += 10; // Exact token match
      } else if (textToken.includes(queryToken)) {
        score += 5; // Partial token match
      } else if (queryToken.includes(textToken) && textToken.length > 2) {
        score += 3; // Token is substring of query
      }
    });
  });
  
  return score;
}

function matchesQuery(text: string, queryTokens: string[]): boolean {
  const normalizedText = normalizeText(text);
  
  // Check if all query tokens appear somewhere in the text
  return queryTokens.every(token => normalizedText.includes(token));
}

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Index growth tips
  growthTips.forEach((tip) => {
    results.push({
      id: `growth-${tip.id}`,
      type: 'growth-tip',
      title: tip.title,
      snippet: tip.description,
      section: 'Growth Tips',
      targetId: `growth-tip-${tip.id}`,
    });
  });

  // Index checklists
  checklists.forEach((checklist, idx) => {
    results.push({
      id: `checklist-${idx}`,
      type: 'checklist',
      title: checklist.title,
      snippet: checklist.items[0] || '',
      section: 'Growth Tips',
      targetId: `checklist-${idx}`,
    });
  });

  // Index platform tips
  platformTips.forEach((platform) => {
    platform.tips.forEach((tip, tipIdx) => {
      results.push({
        id: `platform-${platform.id}-${tipIdx}`,
        type: 'platform-tip',
        title: `${platform.name} Tip`,
        snippet: tip,
        section: 'Platform Tips',
        platform: platform.name,
        targetId: `platform-${platform.id}`,
      });
    });
  });

  // Index FAQs
  faqs.forEach((faq) => {
    results.push({
      id: faq.id,
      type: 'faq',
      title: faq.question,
      snippet: faq.answer.substring(0, 150) + '...',
      section: 'FAQ',
      targetId: faq.id,
    });
  });

  // Index broad topic guidance
  broadTopicGuidance.forEach((item) => {
    results.push({
      id: `broad-guidance-${item.id}`,
      type: 'broad-guidance',
      title: item.title,
      snippet: item.description,
      section: 'Guidance',
      targetId: `broad-guidance-${item.id}`,
    });
  });

  // Index content type guidance
  contentTypeGuidance.forEach((item) => {
    results.push({
      id: `content-type-guidance-${item.id}`,
      type: 'content-type-guidance',
      title: item.title,
      snippet: item.description,
      section: 'Content Types',
      targetId: `content-type-guidance-${item.id}`,
    });
  });

  return results;
}

export function searchContent(query: string, index: SearchResult[]): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const queryTokens = tokenize(query);
  
  if (queryTokens.length === 0) {
    return [];
  }

  // Get the original data for more comprehensive searching
  const enhancedIndex = index.map(item => {
    let fullText = `${item.title} ${item.snippet} ${item.section}`;
    
    if (item.platform) {
      fullText += ` ${item.platform}`;
    }
    
    // Add additional searchable content based on type
    if (item.type === 'growth-tip') {
      const tip = growthTips.find(t => `growth-tip-${t.id}` === item.targetId);
      if (tip) {
        fullText += ` ${tip.points.join(' ')}`;
      }
    } else if (item.type === 'checklist') {
      const checklistIdx = parseInt(item.id.replace('checklist-', ''));
      const checklist = checklists[checklistIdx];
      if (checklist) {
        fullText += ` ${checklist.items.join(' ')}`;
      }
    } else if (item.type === 'broad-guidance') {
      const guidance = broadTopicGuidance.find(g => `broad-guidance-${g.id}` === item.targetId);
      if (guidance) {
        fullText += ` ${guidance.tips.join(' ')} ${guidance.keywords.join(' ')} ${guidance.disclaimer || ''}`;
      }
    } else if (item.type === 'content-type-guidance') {
      const guidance = contentTypeGuidance.find(g => `content-type-guidance-${g.id}` === item.targetId);
      if (guidance) {
        fullText += ` ${guidance.tips.join(' ')} ${guidance.keywords.join(' ')} ${guidance.disclaimer || ''}`;
      }
    }
    
    return {
      ...item,
      fullText
    };
  });

  // Filter and score results
  const scoredResults = enhancedIndex
    .filter(item => matchesQuery(item.fullText, queryTokens))
    .map(item => ({
      ...item,
      score: calculateRelevanceScore(item.fullText, queryTokens)
    }))
    .sort((a, b) => b.score - a.score);

  // Return results without the fullText and score properties
  return scoredResults.map(({ fullText, score, ...item }) => item);
}
