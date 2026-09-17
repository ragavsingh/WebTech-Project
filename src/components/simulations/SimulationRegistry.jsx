import React from 'react';
import DnsSimulator from './DnsSimulator';
import HttpLifecycleSimulator from './HttpLifecycleSimulator';
import DomTreeSimulator from './DomTreeSimulator';
import BoxModelSimulator from './BoxModelSimulator';
import InternetHistoryTimeline from './InternetHistoryTimeline';
import WwwVisualizer from './WwwVisualizer';
import HtmlPlayground from './HtmlPlayground';
import HttpSimulatorEnhanced from './HttpSimulatorEnhanced';
import SmtpSimulator from './SmtpSimulator';
import Pop3Simulator from './Pop3Simulator';
import ImapSimulator from './ImapSimulator';
import Pop3VsImapSimulator from './Pop3VsImapSimulator';
import MimeVisualizer from './MimeVisualizer';
import BrowserPipelineVisualizer from './BrowserPipelineVisualizer';
import WebServerSimulator from './WebServerSimulator';
import FollowWebQueryCapstone from './FollowWebQueryCapstone';
import BreakTheWebChallenge from './BreakTheWebChallenge';

// Unit 2 Interactive Simulators
import HtmlListsTablesImages from './HtmlListsTablesImages';
import FormBuilderSandbox from './FormBuilderSandbox';
import DhtmlEventsSimulator from './DhtmlEventsSimulator';
import DomExplorerSimulator from './DomExplorerSimulator';
import XmlTreeEditor from './XmlTreeEditor';
import XmlSchemaValidator from './XmlSchemaValidator';
import XslTransformationSimulator from './XslTransformationSimulator';
import XmlProcessorPipeline from './XmlProcessorPipeline';
import DomVsSaxSimulator from './DomVsSaxSimulator';
import DynamicWebpageLab from './DynamicWebpageLab';

const SIMULATION_MAP = {
  // Unit 1 Simulators
  'history-timeline': InternetHistoryTimeline,
  'www-architecture': WwwVisualizer,
  'html-playground': HtmlPlayground,
  'http-lifecycle': HttpSimulatorEnhanced,
  'smtp-flow': SmtpSimulator,
  'pop3-flow': Pop3Simulator,
  'imap-flow': ImapSimulator,
  'pop3-vs-imap': Pop3VsImapSimulator,
  'mime-types': MimeVisualizer,
  'dns-flow': DnsSimulator,
  'browser-pipeline': BrowserPipelineVisualizer,
  'web-server': WebServerSimulator,
  'follow-a-web-request': FollowWebQueryCapstone,
  'break-the-web': BreakTheWebChallenge,

  // Unit 2 Interactive Laboratory Simulators
  'html-elements': HtmlListsTablesImages,
  'form-builder': FormBuilderSandbox,
  'dhtml-events': DhtmlEventsSimulator,
  'dom-explorer': DomExplorerSimulator,
  'xml-tree': XmlTreeEditor,
  'xml-schema': XmlSchemaValidator,
  'xsl-transform': XslTransformationSimulator,
  'xml-processor': XmlProcessorPipeline,
  'dom-vs-sax': DomVsSaxSimulator,
  'dynamic-webpage-lab': DynamicWebpageLab,

  // General / Legacy
  'dom-tree': DomTreeSimulator,
  'box-model': BoxModelSimulator
};

export default function SimulationRegistry({ type }) {
  const Component = SIMULATION_MAP[type];

  if (!Component) {
    return (
      <div className="p-8 text-center rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-slate-500 text-xs">
        Interactive simulation for <code>{type}</code> is in roadmap.
      </div>
    );
  }

  return <Component />;
}
