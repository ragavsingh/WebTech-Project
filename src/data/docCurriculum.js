/**
 * Central Documentation Curriculum Index
 * Aggregates Chapters, Domain Topics, Subtopics, and Deep-Dive Educational Content
 */

import { CHAPTERS_DATA } from './chaptersData';
import { DOMAIN_TOPICS } from './domainTopicsData';
import { CHAPTER_1_TOPICS } from './content/chapter1';
import { CHAPTER_2_TOPICS } from './content/chapter2';
import { CHAPTER_3_TOPICS } from './content/chapter3';
import { CHAPTER_4_TOPICS } from './content/chapter4';
import { CHAPTER_5_TOPICS } from './content/chapter5';
import { CHAPTER_6_TOPICS } from './content/chapter6';

export const ALL_DOC_TOPICS_MAP = {
  ...CHAPTER_1_TOPICS,
  ...CHAPTER_2_TOPICS,
  ...CHAPTER_3_TOPICS,
  ...CHAPTER_4_TOPICS,
  ...CHAPTER_5_TOPICS,
  ...CHAPTER_6_TOPICS,
};

export const DOC_CHAPTERS = CHAPTERS_DATA;
export { DOMAIN_TOPICS };

// Flattened ordered list of all topic summaries across the 10 domain topics
export const ORDERED_TOPICS = DOMAIN_TOPICS.flatMap(domain =>
  domain.topics.map(topic => ({
    ...topic,
    domainId: domain.id,
    domainTitle: domain.title,
    unitBadge: domain.unitBadge
  }))
);

/**
 * Retrieve a topic by its unique slug ID
 */
export function getDocTopicById(topicId) {
  if (!topicId) return ALL_DOC_TOPICS_MAP['1.1-history-of-the-internet'];
  return ALL_DOC_TOPICS_MAP[topicId] || null;
}

/**
 * Retrieve the first topic in the curriculum
 */
export function getDefaultTopic() {
  return ALL_DOC_TOPICS_MAP['1.1-history-of-the-internet'];
}

/**
 * Find which Domain Topic category contains the given topic ID
 */
export function getDomainTopicForTopicId(topicId) {
  if (!topicId) return DOMAIN_TOPICS[0];
  return DOMAIN_TOPICS.find(domain => domain.topics.some(t => t.id === topicId)) || DOMAIN_TOPICS[0];
}

/**
 * Get adjacent (previous and next) topics for bottom navigation
 */
export function getAdjacentTopics(currentTopicId) {
  const index = ORDERED_TOPICS.findIndex(t => t.id === currentTopicId);
  if (index === -1) {
    return { prev: null, next: null };
  }

  const prev = index > 0 ? ORDERED_TOPICS[index - 1] : null;
  const next = index < ORDERED_TOPICS.length - 1 ? ORDERED_TOPICS[index + 1] : null;

  return { prev, next };
}

/**
 * Search topics by keyword, title, code, or overview
 */
export function searchDocTopics(query) {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (q.length === 0) return [];

  const results = [];

  for (const topicMeta of ORDERED_TOPICS) {
    const fullTopic = ALL_DOC_TOPICS_MAP[topicMeta.id];
    let score = 0;
    const matches = [];

    // Check code match (e.g. "1.1", "4.3")
    if (topicMeta.code.toLowerCase().includes(q)) {
      score += 50;
      matches.push('Code: ' + topicMeta.code);
    }

    // Check title match
    if (topicMeta.title.toLowerCase().includes(q)) {
      score += 40;
      matches.push('Title match');
    }

    // Check subtitle match
    if (topicMeta.subtitle && topicMeta.subtitle.toLowerCase().includes(q)) {
      score += 20;
      matches.push('Topic subtitle');
    }

    // Check domain title match
    if (topicMeta.domainTitle && topicMeta.domainTitle.toLowerCase().includes(q)) {
      score += 15;
      matches.push(topicMeta.domainTitle);
    }

    // Check overview and key points
    if (fullTopic?.overview?.lead?.toLowerCase().includes(q)) {
      score += 15;
      matches.push('Overview lead');
    }

    if (fullTopic?.reallife?.company?.toLowerCase().includes(q)) {
      score += 15;
      matches.push('Case study: ' + fullTopic.reallife.company);
    }

    if (fullTopic?.systems?.tools?.some(tool => tool.toLowerCase().includes(q))) {
      score += 10;
      matches.push('System tools');
    }

    if (score > 0) {
      results.push({
        ...topicMeta,
        score,
        matchReason: matches.join(' • '),
        company: fullTopic?.reallife?.company || null
      });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, 10);
}
