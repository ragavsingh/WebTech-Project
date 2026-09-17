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

// Unit 3 Web Services & AJAX Simulators
import WebServiceArchitectureSimulator from './WebServiceArchitectureSimulator';
import UddiDiscoverySimulator from './UddiDiscoverySimulator';
import SoapMessageBuilder from './SoapMessageBuilder';
import WsdlExplorerSimulator from './WsdlExplorerSimulator';
import WsTriangleArchitectureSimulator from './WsTriangleArchitectureSimulator';
import WsLifecycleSimulator from './WsLifecycleSimulator';
import AjaxComparisonSimulator from './AjaxComparisonSimulator';
import AjaxPerformanceSimulator from './AjaxPerformanceSimulator';
import AjaxPlaygroundSimulator from './AjaxPlaygroundSimulator';
import CorbaArchitectureSimulator from './CorbaArchitectureSimulator';
import BuildWebServiceLab from './BuildWebServiceLab';

// Unit 4 Web 2.0 to Web 3.0 Evolution Simulators
import WebEvolutionTimeline from './WebEvolutionTimeline';
import SocialWebSimulator from './SocialWebSimulator';
import RssReaderSimulator from './RssReaderSimulator';
import RailsMvcSimulator from './RailsMvcSimulator';
import OpenApiExplorerSimulator from './OpenApiExplorerSimulator';
import SemanticWebSimulator from './SemanticWebSimulator';
import RdfTripleVisualizer from './RdfTripleVisualizer';
import WidgetsDashboardSimulator from './WidgetsDashboardSimulator';
import MashupArchitectureSimulator from './MashupArchitectureSimulator';
import InformationSystemSimulator from './InformationSystemSimulator';
import SearchEnginePipelineSimulator from './SearchEnginePipelineSimulator';
import RecommenderSystemSimulator from './RecommenderSystemSimulator';
import BlockchainBenefitsSimulator from './BlockchainBenefitsSimulator';
import EdgeComputingSimulator from './EdgeComputingSimulator';
import DarkModeInspectorSimulator from './DarkModeInspectorSimulator';
import WebEvolutionLab from './WebEvolutionLab';

// Unit 5 The Future Web Lab Simulators
import Web40FutureSimulator from './Web40FutureSimulator';
import AiPersonalizedWebSimulator from './AiPersonalizedWebSimulator';
import DwebNetworkSimulator from './DwebNetworkSimulator';
import BlockchainIntegrationSimulator from './BlockchainIntegrationSimulator';
import IotDashboardSimulator from './IotDashboardSimulator';
import WebArSimulator from './WebArSimulator';
import WebVrSimulator from './WebVrSimulator';
import SmartWebSimulator from './SmartWebSimulator';
import AdaptiveInterfaceSimulator from './AdaptiveInterfaceSimulator';
import WebAutomationSimulator from './WebAutomationSimulator';
import FiveGImpactSimulator from './FiveGImpactSimulator';
import BuildFutureWebLab from './BuildFutureWebLab';

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

  // Unit 3 Web Services & Communication Simulators
  'web-services-flow': WebServiceArchitectureSimulator,
  'uddi-discovery': UddiDiscoverySimulator,
  'soap-builder': SoapMessageBuilder,
  'wsdl-explorer': WsdlExplorerSimulator,
  'ws-triangle': WsTriangleArchitectureSimulator,
  'ws-architecture': WsTriangleArchitectureSimulator,
  'ws-lifecycle': WsLifecycleSimulator,
  'ajax-comparison': AjaxComparisonSimulator,
  'ajax-performance': AjaxPerformanceSimulator,
  'ajax-programming': AjaxPlaygroundSimulator,
  'corba-architecture': CorbaArchitectureSimulator,
  'build-web-service-lab': BuildWebServiceLab,

  // Unit 4 Web 2.0 to Web 3.0 Evolution Simulators
  'web-evolution-timeline': WebEvolutionTimeline,
  'social-web-sim': SocialWebSimulator,
  'rss-reader-sim': RssReaderSimulator,
  'rails-mvc-sim': RailsMvcSimulator,
  'open-api-explorer': OpenApiExplorerSimulator,
  'semantic-web-sim': SemanticWebSimulator,
  'rdf-triple-visualizer': RdfTripleVisualizer,
  'widgets-dashboard': WidgetsDashboardSimulator,
  'mashup-architecture': MashupArchitectureSimulator,
  'info-system-sim': InformationSystemSimulator,
  'search-engine-pipeline': SearchEnginePipelineSimulator,
  'recommender-system-sim': RecommenderSystemSimulator,
  'blockchain-benefits-sim': BlockchainBenefitsSimulator,
  'edge-computing-sim': EdgeComputingSimulator,
  'dark-mode-inspector': DarkModeInspectorSimulator,
  'web-evolution-lab': WebEvolutionLab,

  // Unit 5 The Future Web Lab Simulators
  'web40-future-sim': Web40FutureSimulator,
  'ai-personalized-web-sim': AiPersonalizedWebSimulator,
  'dweb-network-sim': DwebNetworkSimulator,
  'blockchain-integration-sim': BlockchainIntegrationSimulator,
  'iot-dashboard-sim': IotDashboardSimulator,
  'web-ar-sim': WebArSimulator,
  'web-vr-sim': WebVrSimulator,
  'smart-web-sim': SmartWebSimulator,
  'adaptive-interface-sim': AdaptiveInterfaceSimulator,
  'web-automation-sim': WebAutomationSimulator,
  'five-g-impact-sim': FiveGImpactSimulator,
  'build-future-web-lab': BuildFutureWebLab,

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
