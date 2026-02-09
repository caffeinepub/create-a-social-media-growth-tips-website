import { growthTips, checklists } from '@/content/growthGuidance';
import { platformTips, faqs } from '@/content/siteContent';
import { broadTopicGuidance } from '@/content/broadTopicGuidance';
import { contentTypeGuidance } from '@/content/contentTypeGuidance';
import { videoLessons } from '@/content/videoLessons';

export interface SearchResult {
  id: string;
  type: 'growth-tip' | 'checklist' | 'platform-tip' | 'faq' | 'broad-guidance' | 'content-type-guidance' | 'video-lesson';
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
  return normalizeText(text)
    .split(/[\s,;.!?()]+/)
    .filter(token => token.length > 0);
}

export function buildSearchIndex(): SearchResult[] {
  const index: SearchResult[] = [];

  // Index growth tips
  growthTips.forEach(tip => {
    const fullText = `${tip.title} ${tip.description} ${tip.points.join(' ')} growth tips strategies`;
    index.push({
      id: `growth-tip-${tip.id}`,
      type: 'growth-tip',
      title: tip.title,
      snippet: tip.description,
      section: 'Growth Tips',
      targetId: `growth-tip-${tip.id}`
    });
  });

  // Index checklists
  checklists.forEach((checklist, idx) => {
    const fullText = `${checklist.title} ${checklist.items.join(' ')} checklist action items`;
    index.push({
      id: `checklist-${idx}`,
      type: 'checklist',
      title: checklist.title,
      snippet: checklist.items.slice(0, 2).join(', '),
      section: 'Growth Tips',
      targetId: `checklist-${idx}`
    });
  });

  // Index platform tips
  platformTips.forEach((platformTip) => {
    const fullText = `${platformTip.name} ${platformTip.tips.join(' ')} platform strategies`;
    platformTip.tips.forEach((tip, idx) => {
      index.push({
        id: `platform-${platformTip.id}-${idx}`,
        type: 'platform-tip',
        title: `${platformTip.name} Tip ${idx + 1}`,
        snippet: tip,
        section: 'Platform Tips',
        platform: platformTip.name,
        targetId: `platform-tip-${platformTip.id}-${idx}`
      });
    });
  });

  // Index broad topic guidance
  broadTopicGuidance.forEach(item => {
    const fullText = `${item.title} ${item.description} ${item.tips.join(' ')} ${item.keywords.join(' ')} ${item.category} guidance`;
    index.push({
      id: `broad-guidance-${item.id}`,
      type: 'broad-guidance',
      title: item.title,
      snippet: item.description,
      section: 'Broad Topics',
      targetId: `broad-guidance-${item.id}`
    });
  });

  // Index content type guidance
  contentTypeGuidance.forEach(item => {
    const fullText = `${item.title} ${item.description} ${item.tips.join(' ')} ${item.keywords.join(' ')} content type`;
    index.push({
      id: `content-type-${item.id}`,
      type: 'content-type-guidance',
      title: item.title,
      snippet: item.description,
      section: 'Content Types',
      targetId: `content-type-${item.id}`
    });
  });

  // Index video lessons
  videoLessons.forEach(lesson => {
    const fullText = `${lesson.title} ${lesson.description} ${lesson.tags.join(' ')} ${lesson.platform} video lesson tutorial`;
    index.push({
      id: `video-lesson-${lesson.id}`,
      type: 'video-lesson',
      title: lesson.title,
      snippet: lesson.description,
      section: 'Video Lessons',
      platform: lesson.platform,
      targetId: `video-lesson-${lesson.id}`
    });
  });

  // Index FAQs
  faqs.forEach((faq, idx) => {
    const fullText = `${faq.question} ${faq.answer} faq help support`;
    index.push({
      id: `faq-${idx}`,
      type: 'faq',
      title: faq.question,
      snippet: faq.answer.substring(0, 150),
      section: 'FAQ',
      targetId: `faq-${idx}`
    });
  });

  return index;
}

export function searchContent(query: string, index: SearchResult[]): SearchResult[] {
  if (!query.trim()) return [];

  const queryTokens = tokenize(query);
  const results: Array<SearchResult & { score: number }> = [];

  index.forEach(item => {
    const searchableText = normalizeText(
      `${item.title} ${item.snippet} ${item.section} ${item.platform || ''}`
    );
    const searchableTokens = tokenize(searchableText);

    let score = 0;

    // Multi-word phrase matching
    const normalizedQuery = normalizeText(query);
    if (searchableText.includes(normalizedQuery)) {
      score += 100;
    }

    // Individual token matching
    queryTokens.forEach(queryToken => {
      searchableTokens.forEach(searchToken => {
        if (searchToken.startsWith(queryToken)) {
          score += queryToken.length === searchToken.length ? 10 : 5;
        }
      });

      // Title boost
      if (normalizeText(item.title).includes(queryToken)) {
        score += 20;
      }

      // Platform boost
      if (item.platform && normalizeText(item.platform).includes(queryToken)) {
        score += 15;
      }
    });

    if (score > 0) {
      results.push({ ...item, score });
    }
  });

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 20);
}
