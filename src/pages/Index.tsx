import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gaming-border bg-radial-gradient">
        <div className="absolute inset-0 bg-top-background from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10  border-1 border-[rgba(255,41,80,0.2)] rounded-full bg-[rgba(255,41,80,0.1)] text-[#FF2845] ">
              <span className="text-primary text-sm font-bold tracking-wider uppercase text-red-500">Ultimate Guide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Valorant Complete Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-rgba[(0,0,65,1)]">
              Master the tactical shooter that combines precise gunplay with unique agent abilities
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto  py-12 md:py-16 bg-[#111318]">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Section 1: Core Gameplay */}
          <Card className="p-8 border-gaming-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <h2 className="text-3xl font-bold mb-6  flex items-center gap-3 text-white">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              The Core Gameplay Loop: Tactical Shooting Meets Agent Abilities
            </h2>
            <ul className="space-y-4 text-muted-foreground list-disc">
              <li className="flex gap-3 ">
                <span className="text-primary mt-1.5 text-red-500">•</span>
                <span>Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 text-red-500">•</span>
                <span>It features 5v5 character-based combat where precise gunplay is combined with unique agent abilities.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 text-red-500">•</span>
                <span>The main objective involves attacking or defending bomb sites with a device called the Spike.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 text-red-500">•</span>
                <span>Matches are typically best of 25 rounds, with the first team to win 13 rounds securing victory.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 text-red-500">•</span>
                <span>Players have one life per round, emphasizing strategic decision-making and teamwork.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5 text-red-500">•</span>
                <span>An in-game economic system allows players to purchase weapons and ability charges based on round outcomes and performance.</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Sources:</span> <a href="https://en.wikipedia.org/wiki/Valorant" className="text-primary hover:underline">Wikipedia</a>, <a href="https://playvalorant.com/en-us/" className="text-primary hover:underline">PlayValorant.com</a>, <a href="https://www.redbull.com/us-en/what-is-valorant-beginner-guide" className="text-primary hover:underline">Red Bull Guide</a>
              </p>
            </div>
          </Card>

          {/* Section 2: Mastering Agents */}
          <Card className="p-8 border-gaming-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              Mastering the Agents: Roles, Unique Skills, and Unlocks
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>As of August 2025, Valorant offers 27 playable Agents, each based on different countries and cultures.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Agents are categorized into four distinct roles: Duelists, Sentinels, Initiators, and Controllers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Duelists</span> are 'self-sufficient fraggers' specializing in attacking sites and creating space, often with movement and blinding abilities.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Sentinels</span> are the defensive line, locking down sites and protecting teammates with static obstacles that provide information or deal damage.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Initiators</span> plan offensive pushes by breaking defensive positions and revealing enemy locations with abilities like flashes and recon tools.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Controllers</span> 'slice up dangerous territory' using smokes, molotovs, stuns, or flashes to control sightlines and clear areas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Five agents are unlocked upon account creation; additional agents can be unlocked using Kingdom Credits (earned through gameplay/tasks) or Valorant Points (purchased with real money).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>New agents are initially unlocked with Valorant Points, Agent Recruitment Events, or an active Xbox Game Pass subscription for the first 28 days of their release.</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Sources:</span> <a href="https://en.wikipedia.org/wiki/Valorant" className="text-primary hover:underline">Wikipedia</a>, <a href="https://playvalorant.com/en-us/news/announcements/beginners-guide/" className="text-primary hover:underline">Beginner's Guide</a>, <a href="https://www.redbull.com/us-en/what-is-valorant-beginner-guide" className="text-primary hover:underline">Red Bull Guide</a>
              </p>
            </div>
          </Card>

          {/* Section 3: Game Modes */}
          <Card className="p-8 border-gaming-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              Diverse Game Modes for Every Playstyle
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Unrated:</span> The standard non-ranked mode, best of 25 rounds, with teams switching sides after 12 rounds.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Spike Rush:</span> A faster-paced, best of 7 rounds mode where all attackers carry a spike, guns are randomized each round, and ultimate abilities charge faster.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Swiftplay:</span> A shortened version of Unrated, best of 9 rounds, averaging around 15 minutes per game.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Competitive:</span> Ranked matches similar to Unrated but with a win-based ranking system (Iron to Radiant) and a 'win by two' overtime condition; requires players to reach level 20.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Premier:</span> A 5v5 path-to-pro competitive mode for teams to compete in divisions, with top teams advancing to the Division Championship and potentially the VCT ecosystem; features a map pick-and-ban system.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Deathmatch:</span> A 14-player free-for-all where the first to 40 kills or the player with the most kills in 9 minutes wins; abilities are disabled, focusing on pure gunplay.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Team Deathmatch:</span> A 5v5 mode where the first team to 100 kills or the team with the most kills in 9 minutes 30 seconds wins; agent abilities are allowed, and it features specific maps (Piazza, District, Kasbah).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Escalation:</span> A team-based 'gungame' mode where teams progress through 12 random weapons by getting kills; abilities are generally disabled, but some are available as weapons.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span><span className="font-semibold text-foreground text-white">Snowball Fight:</span> A limited-time Christmas mode (50 kills to win) where players use a snowball launcher, with abilities disabled and power-up gifts spawning.</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Sources:</span> <a href="https://en.wikipedia.org/wiki/Valorant" className="text-primary hover:underline">Wikipedia</a>, <a href="https://playvalorant.com/en-us/news/announcements/beginners-guide/" className="text-primary hover:underline">Beginner's Guide</a>, <a href="https://www.redbull.com/us-en/what-is-valorant-beginner-guide" className="text-primary hover:underline">Red Bull Guide</a>
              </p>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Index;
