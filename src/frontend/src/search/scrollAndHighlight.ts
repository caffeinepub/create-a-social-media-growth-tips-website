export function scrollToElement(elementId: string, navHeight: number = 80) {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  // Add highlight effect
  highlightElement(element);
}

function highlightElement(element: HTMLElement) {
  // Add highlight class
  element.classList.add('search-highlight');
  
  // Focus the element if it's focusable, or make it temporarily focusable
  const originalTabIndex = element.getAttribute('tabindex');
  if (!element.hasAttribute('tabindex')) {
    element.setAttribute('tabindex', '-1');
  }
  element.focus({ preventScroll: true });
  
  // Remove highlight after animation
  setTimeout(() => {
    element.classList.remove('search-highlight');
    
    // Restore original tabindex
    if (originalTabIndex === null) {
      element.removeAttribute('tabindex');
    } else {
      element.setAttribute('tabindex', originalTabIndex);
    }
  }, 2000);
}
