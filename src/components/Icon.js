import React from "react";
import ConditionalWrap from "../components/ConditionalWrap";
// Devicons from the react-icons collection: https://react-icons.github.io/react-icons/icons?name=di
import {
  DiAndroid,
  DiAngularSimple,
  DiAppcelerator,
  DiApple,
  DiAppstore,
  DiAptana,
  DiAsterisk,
  DiAtlassian,
  DiAtom,
  DiAws,
  DiBackbone,
  DiBingSmall,
  DiBintray,
  DiBitbucket,
  DiBlackberry,
  DiBootstrap,
  DiBower,
  DiBrackets,
  DiBugsense,
  DiCelluloid,
  DiChrome,
  DiCisco,
  DiClojure,
  DiClojureAlt,
  DiCloud9,
  DiCoda,
  DiCode,
  DiCodeBadge,
  DiCodeigniter,
  DiCodepen,
  DiCodrops,
  DiCoffeescript,
  DiCompass,
  DiComposer,
  DiCreativecommons,
  DiCreativecommonsBadge,
  DiCss3,
  DiCss3Full,
  DiCssTricks,
  DiCssdeck,
  DiDart,
  DiDatabase,
  DiDebian,
  DiDigitalOcean,
  DiDjango,
  DiDlang,
  DiDocker,
  DiDoctrine,
  DiDojo,
  DiDotnet,
  DiDreamweaver,
  DiDropbox,
  DiDrupal,
  DiEclipse,
  DiEmber,
  DiEnvato,
  DiErlang,
  DiExtjs,
  DiFirebase,
  DiFirefox,
  DiFsharp,
  DiGhost,
  DiGhostSmall,
  DiGit,
  DiGitBranch,
  DiGitCommit,
  DiGitCompare,
  DiGitMerge,
  DiGitPullRequest,
  DiGithub,
  DiGithubAlt,
  DiGithubBadge,
  DiGithubFull,
  DiGnu,
  DiGo,
  DiGoogleAnalytics,
  DiGoogleCloudPlatform,
  DiGoogleDrive,
  DiGrails,
  DiGroovy,
  DiGrunt,
  DiGulp,
  DiHackernews,
  DiHaskell,
  DiHeroku,
  DiHtml5,
  DiHtml53DEffects,
  DiHtml5Connectivity,
  DiHtml5DeviceAccess,
  DiHtml5Multimedia,
  DiIe,
  DiIllustrator,
  DiIntellij,
  DiIonic,
  DiJava,
  DiJavascript,
  DiJavascript1,
  DiJekyllSmall,
  DiJenkins,
  DiJira,
  DiJoomla,
  DiJqueryLogo,
  DiJqueryUiLogo,
  DiJsBadge,
  DiKomodo,
  DiKrakenjs,
  DiKrakenjsBadge,
  DiLaravel,
  DiLess,
  DiLinux,
  DiMagento,
  DiMailchimp,
  DiMarkdown,
  DiMaterializecss,
  DiMeteor,
  DiMeteorfull,
  DiMitlicence,
  DiModernizr,
  DiMongodb,
  DiMootools,
  DiMootoolsBadge,
  DiMozilla,
  DiMsqlServer,
  DiMysql,
  DiNancy,
  DiNetbeans,
  DiNetmagazine,
  DiNginx,
  DiNodejs,
  DiNodejsSmall,
  DiNpm,
  DiOnedrive,
  DiOpenshift,
  DiOpensource,
  DiOpera,
  DiPerl,
  DiPhonegap,
  DiPhotoshop,
  DiPhp,
  DiPostgresql,
  DiProlog,
  DiPython,
  DiRackspace,
  DiRaphael,
  DiRasberryPi,
  DiReact,
  DiRedhat,
  DiRedis,
  DiRequirejs,
  DiResponsive,
  DiRor,
  DiRuby,
  DiRubyRough,
  DiRust,
  DiSafari,
  DiSass,
  DiScala,
  DiScriptcs,
  DiScrum,
  DiSenchatouch,
  DiSizzlejs,
  DiSmashingMagazine,
  DiSnapSvg,
  DiSpark,
  DiSqllite,
  DiStackoverflow,
  DiStreamline,
  DiStylus,
  DiSublime,
  DiSwift,
  DiSymfony,
  DiSymfonyBadge,
  DiTechcrunch,
  DiTerminal,
  DiTerminalBadge,
  DiTravis,
  DiTrello,
  DiTypo3,
  DiUbuntu,
  DiUikit,
  DiUnitySmall,
  DiVim,
  DiVisualstudio,
  DiW3C,
  DiWebplatform,
  DiWindows,
  DiWordpress,
  DiYahoo,
  DiYahooSmall,
  DiYeoman,
  DiYii,
  DiZend,
} from "react-icons/di";
import { HiExternalLink, HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  SvgAfterEffects,
  SvgApache,
  SvgBabel,
  // SvgClose,
  SvgFigma,
  SvgGatsby,
  SvgHamburger,
  SvgLinkedin,
  SvgVSCode,
} from "./SVGs.js";

// These are Devicons which are missing from the react-icons collection: https://react-icons.github.io/react-icons/icons?name=di

const Icon = (props) => {
  const iconMap = {
    // DevIcons
    Android: <DiAndroid />,
    Angular: <DiAngularSimple />,
    Appcelerator: <DiAppcelerator />,
    Apple: <DiApple />,
    Appstore: <DiAppstore />,
    Aptana: <DiAptana />,
    Asterisk: <DiAsterisk />,
    Atlassian: <DiAtlassian />,
    Atom: <DiAtom />,
    Aws: <DiAws />,
    Backbone: <DiBackbone />,
    BingSmall: <DiBingSmall />,
    Bintray: <DiBintray />,
    Bitbucket: <DiBitbucket />,
    Blackberry: <DiBlackberry />,
    Bootstrap: <DiBootstrap />,
    Bower: <DiBower />,
    Brackets: <DiBrackets />,
    Bugsense: <DiBugsense />,
    Celluloid: <DiCelluloid />,
    Chrome: <DiChrome />,
    Cisco: <DiCisco />,
    Clojure: <DiClojure />,
    ClojureAlt: <DiClojureAlt />,
    Cloud9: <DiCloud9 />,
    Coda: <DiCoda />,
    Code: <DiCode />,
    CodeBadge: <DiCodeBadge />,
    Codeigniter: <DiCodeigniter />,
    Codepen: <DiCodepen />,
    Codrops: <DiCodrops />,
    Coffeescript: <DiCoffeescript />,
    Compass: <DiCompass />,
    Composer: <DiComposer />,
    Creativecommons: <DiCreativecommons />,
    CreativecommonsBadge: <DiCreativecommonsBadge />,
    Css3: <DiCss3 />,
    Css3Full: <DiCss3Full />,
    CssTricks: <DiCssTricks />,
    Cssdeck: <DiCssdeck />,
    Dart: <DiDart />,
    Database: <DiDatabase />,
    Debian: <DiDebian />,
    DigitalOcean: <DiDigitalOcean />,
    Django: <DiDjango />,
    Dlang: <DiDlang />,
    Docker: <DiDocker />,
    Doctrine: <DiDoctrine />,
    Dojo: <DiDojo />,
    Dotnet: <DiDotnet />,
    Dreamweaver: <DiDreamweaver />,
    Dropbox: <DiDropbox />,
    Drupal: <DiDrupal />,
    Eclipse: <DiEclipse />,
    Ember: <DiEmber />,
    Envato: <DiEnvato />,
    Erlang: <DiErlang />,
    Extjs: <DiExtjs />,
    Firebase: <DiFirebase />,
    Firefox: <DiFirefox />,
    Fsharp: <DiFsharp />,
    Ghost: <DiGhost />,
    GhostSmall: <DiGhostSmall />,
    Git: <DiGit />,
    GitBranch: <DiGitBranch />,
    GitCommit: <DiGitCommit />,
    GitCompare: <DiGitCompare />,
    GitMerge: <DiGitMerge />,
    GitPullRequest: <DiGitPullRequest />,
    Github: <DiGithub />,
    GithubAlt: <DiGithubAlt />,
    GithubBadge: <DiGithubBadge />,
    GithubFull: <DiGithubFull />,
    Gnu: <DiGnu />,
    Go: <DiGo />,
    GoogleAnalytics: <DiGoogleAnalytics />,
    GoogleCloudPlatform: <DiGoogleCloudPlatform />,
    GoogleDrive: <DiGoogleDrive />,
    Grails: <DiGrails />,
    Groovy: <DiGroovy />,
    Grunt: <DiGrunt />,
    Gulp: <DiGulp />,
    Hackernews: <DiHackernews />,
    Haskell: <DiHaskell />,
    Heroku: <DiHeroku />,
    Html5: <DiHtml5 />,
    Html53DEffects: <DiHtml53DEffects />,
    Html5Connectivity: <DiHtml5Connectivity />,
    Html5DeviceAccess: <DiHtml5DeviceAccess />,
    Html5Multimedia: <DiHtml5Multimedia />,
    Ie: <DiIe />,
    Illustrator: <DiIllustrator />,
    Intellij: <DiIntellij />,
    Ionic: <DiIonic />,
    Java: <DiJava />,
    Javascript: <DiJavascript />,
    Javascript1: <DiJavascript1 />,
    JekyllSmall: <DiJekyllSmall />,
    Jenkins: <DiJenkins />,
    Jira: <DiJira />,
    Joomla: <DiJoomla />,
    JqueryLogo: <DiJqueryLogo />,
    JqueryUiLogo: <DiJqueryUiLogo />,
    JsBadge: <DiJsBadge />,
    Komodo: <DiKomodo />,
    Krakenjs: <DiKrakenjs />,
    KrakenjsBadge: <DiKrakenjsBadge />,
    Laravel: <DiLaravel />,
    Less: <DiLess />,
    Linux: <DiLinux />,
    Magento: <DiMagento />,
    Mailchimp: <DiMailchimp />,
    Markdown: <DiMarkdown />,
    Materializecss: <DiMaterializecss />,
    Meteor: <DiMeteor />,
    Meteorfull: <DiMeteorfull />,
    Mitlicence: <DiMitlicence />,
    Modernizr: <DiModernizr />,
    Mongodb: <DiMongodb />,
    Mootools: <DiMootools />,
    MootoolsBadge: <DiMootoolsBadge />,
    Mozilla: <DiMozilla />,
    MsqlServer: <DiMsqlServer />,
    Mysql: <DiMysql />,
    Nancy: <DiNancy />,
    Netbeans: <DiNetbeans />,
    Netmagazine: <DiNetmagazine />,
    Nginx: <DiNginx />,
    Nodejs: <DiNodejs />,
    NodejsSmall: <DiNodejsSmall />,
    Npm: <DiNpm />,
    Onedrive: <DiOnedrive />,
    Openshift: <DiOpenshift />,
    Opensource: <DiOpensource />,
    Opera: <DiOpera />,
    Perl: <DiPerl />,
    Phonegap: <DiPhonegap />,
    Photoshop: <DiPhotoshop />,
    Php: <DiPhp />,
    Postgresql: <DiPostgresql />,
    Prolog: <DiProlog />,
    Python: <DiPython />,
    Rackspace: <DiRackspace />,
    Raphael: <DiRaphael />,
    RasberryPi: <DiRasberryPi />,
    React: <DiReact />,
    Redhat: <DiRedhat />,
    Redis: <DiRedis />,
    Requirejs: <DiRequirejs />,
    Responsive: <DiResponsive />,
    Ror: <DiRor />,
    Ruby: <DiRuby />,
    RubyRough: <DiRubyRough />,
    Rust: <DiRust />,
    Safari: <DiSafari />,
    Sass: <DiSass />,
    Scala: <DiScala />,
    Scriptcs: <DiScriptcs />,
    Scrum: <DiScrum />,
    Senchatouch: <DiSenchatouch />,
    Sizzlejs: <DiSizzlejs />,
    SmashingMagazine: <DiSmashingMagazine />,
    SnapSvg: <DiSnapSvg />,
    Spark: <DiSpark />,
    Sqllite: <DiSqllite />,
    Stackoverflow: <DiStackoverflow />,
    Streamline: <DiStreamline />,
    Stylus: <DiStylus />,
    Sublime: <DiSublime />,
    Swift: <DiSwift />,
    Symfony: <DiSymfony />,
    SymfonyBadge: <DiSymfonyBadge />,
    Techcrunch: <DiTechcrunch />,
    Terminal: <DiTerminal />,
    TerminalBadge: <DiTerminalBadge />,
    Travis: <DiTravis />,
    Trello: <DiTrello />,
    Typo3: <DiTypo3 />,
    Ubuntu: <DiUbuntu />,
    Uikit: <DiUikit />,
    UnitySmall: <DiUnitySmall />,
    Vim: <DiVim />,
    Visualstudio: <DiVisualstudio />,
    W3C: <DiW3C />,
    Webplatform: <DiWebplatform />,
    Windows: <DiWindows />,
    Wordpress: <DiWordpress />,
    Yahoo: <DiYahoo />,
    YahooSmall: <DiYahooSmall />,
    Yeoman: <DiYeoman />,
    Yii: <DiYii />,
    Zend: <DiZend />,
    // Heroicons
    ExternalLink: <HiExternalLink />,
    Menu: <HiMenu />,
    // Ionicons 5
    Close: <IoClose />,
    // Custom icons
    AfterEffects: <SvgAfterEffects />,
    Apache: <SvgApache />,
    Babel: <SvgBabel />,
    Figma: <SvgFigma />,
    Gatsby: <SvgGatsby />,
    Hamburger: <SvgHamburger />,
    Linkedin: <SvgLinkedin />,
    VSCode: <SvgVSCode />,
  };
  const label = props.label ? props.label : props.name;
  return (
    <>
      {props.name && (
        <ConditionalWrap
          condition={props.href}
          wrapper={(children) => (
            <a href={props.href} rel="noreferrer" target="_blank">
              {children}
            </a>
          )}
        >
          <div className={`icon stack ${props.className}`}>
            {iconMap[props.name]}
            {label !== "false" ? <b>{label}</b> : ""}
          </div>
        </ConditionalWrap>
      )}
    </>
  );
};

export default Icon;
