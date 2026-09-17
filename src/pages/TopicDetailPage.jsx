import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTopicById, getAllTopics } from '../data/curriculum';
import Breadcrumb from '../components/layout/Breadcrumb';
import Sidebar from '../components/layout/Sidebar';
import TopicHeader from '../components/topic/TopicHeader';
import TopicExplanation from '../components/topic/TopicExplanation';
import HowItWorksStepper from '../components/topic/HowItWorksStepper';
import SimulationPanel from '../components/topic/SimulationPanel';
import CodePlayground from '../components/topic/CodePlayground';
import CommonMistakes from '../components/topic/CommonMistakes';
import RelatedConcepts from '../components/topic/RelatedConcepts';
import MiniChallenge from '../components/topic/MiniChallenge';
import TopicQuiz from '../components/topic/TopicQuiz';
import PreviousNextNavigation from '../components/topic/PreviousNextNavigation';
import { AlertCircle, ArrowLeft, BookOpen, Layers, Milestone, ArrowRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../components/journey/WebJourneyVisualizer';

export default function TopicDetailPage() {
  const { topicId } = useParams();
  const topic = getTopicById(topicId);

  // Scroll to top on topic change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topicId]);

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Topic Under Construction</h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          The topic <code>"{topicId}"</code> is scheduled in the incremental syllabus roadmap. Check out the active interactive labs below.
        </p>
        <div className="pt-4 flex justify-center space-x-3">
          <Link
            to="/topic/dns-resolution"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold"
          >
            DNS Resolution Lab
          </Link>
          <Link
            to="/topic/http-lifecycle"
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold"
          >
            HTTP Lifecycle Lab
          </Link>
        </div>
      </div>
    );
  }

  // Calculate previous and next topics
  const allTopics = getAllTopics();
  const currentIndex = allTopics.findIndex(t => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  // Check if this topic is one of the 15 global journey milestones
  const journeyMilestone = JOURNEY_MILESTONES.find(m => m.topicId === topic.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sticky Topic Navigation Sidebar */}
        <Sidebar activeTopicId={topic.id} />

        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0 space-y-12 pb-16">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Learn', path: '/learn' },
              { label: topic.unitTitle, path: '/learn' },
              { label: topic.title }
            ]}
          />

          {/* 1. Header with Metadata & Actions */}
          <TopicHeader topic={topic} />

          {/* Journey Milestone Banner if this topic is in the 15-step sequence */}
          {journeyMilestone && (
            <div className="bg-gradient-to-r from-indigo-50 via-white to-blue-50/50 rounded-2xl p-4 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-2xs font-mono font-bold text-xs">
                  #{journeyMilestone.number}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-indigo-700 block">
                    Web Technology Journey Milestone ({journeyMilestone.era})
                  </span>
                  <span className="text-xs text-slate-700 font-medium">
                    Step #{journeyMilestone.number} of 15 &bull; {journeyMilestone.subtitle}
                  </span>
                </div>
              </div>
              <Link
                to="/journey"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0 self-start sm:self-auto"
              >
                <span>View Full Journey Map</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}

          {/* 2. Structured Explanation & Why It Matters */}
          <TopicExplanation topic={topic} />

          {/* 3. Step-by-Step Flow Stepper */}
          {topic.howItWorks && (
            <HowItWorksStepper steps={topic.howItWorks} />
          )}

          {/* 4. Interactive Simulation & Visual Lab */}
          {topic.simulationType && (
            <SimulationPanel simulationType={topic.simulationType} title={topic.title} />
          )}

          {/* 5. Practical Real-World Example */}
          {topic.practicalExample && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-indigo-600 inline-block" />
                <span>Practical Real-World Example</span>
              </h2>

              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 block mb-1">
                    Scenario
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {topic.practicalExample.scenario}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {topic.practicalExample.description}
                  </p>
                </div>

                {topic.practicalExample.records && (
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 uppercase text-[10px]">
                        <tr>
                          <th className="p-3">Type</th>
                          <th className="p-3">Host / Key</th>
                          <th className="p-3">Value / Target</th>
                          <th className="p-3">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {topic.practicalExample.records.map((r, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/70">
                            <td className="p-3 font-bold text-indigo-700">{r.type}</td>
                            <td className="p-3 text-slate-800">{r.host}</td>
                            <td className="p-3 text-slate-600 font-semibold">{r.value}</td>
                            <td className="p-3 text-slate-500 font-sans text-xs">{r.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 6. Code & Command Inspector */}
          {topic.codePlayground && (
            <CodePlayground data={topic.codePlayground} />
          )}

          {/* 7. Common Mistakes & Misconceptions */}
          {topic.commonMistakes && (
            <CommonMistakes mistakes={topic.commonMistakes} />
          )}

          {/* 8. Related Concepts */}
          {topic.relatedTopics && (
            <RelatedConcepts topics={topic.relatedTopics} />
          )}

          {/* 9. Mini Hands-On Challenge */}
          {topic.challenge && (
            <MiniChallenge challenge={topic.challenge} />
          )}

          {/* 10. Topic Knowledge Quiz */}
          {topic.quiz && (
            <TopicQuiz topicId={topic.id} questions={topic.quiz} />
          )}

          {/* 11. Previous & Next Navigation */}
          <PreviousNextNavigation prevTopic={prevTopic} nextTopic={nextTopic} />
        </main>
      </div>
    </div>
  );
}
