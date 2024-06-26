import { Noto_Serif_SC } from "next/font/google";

const noto = Noto_Serif_SC({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center">
      <p className={
        "max-w-5xl text-5xl tracking-wider leading-relaxed text-center " +
        noto.className
      }>观自在菩萨行深般若波罗蜜多时照见五蕴皆空度一切苦厄舍利子色不异空空不异色色即是空空即是色受想行识亦复如是舍利子是诸法空相不生不灭不垢不净不增不减是故空中无色无受想行识无眼耳鼻舌身意无色声香味触法无眼界乃至无意识界无无明亦无无明尽乃至无老死亦无老死尽无苦集灭道无智亦无得以无所得故菩提萨埵依般若波罗蜜多故心无罣碍无罣碍故无有恐怖远离颠倒梦想究竟涅槃三世诸佛依般若波罗蜜多故得阿耨多罗三藐三菩提故知般若波罗蜜多是大神咒是大明咒是无上咒是无等等咒能除一切苦真实不虚故说般若波罗蜜多咒即说咒曰揭谛揭谛波罗揭谛波罗僧揭谛菩提萨婆诃</p>
    </main>
  );
}
