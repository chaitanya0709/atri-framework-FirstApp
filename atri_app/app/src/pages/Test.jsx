import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu1 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex38Cb, useFlex35Cb, useFlex31Cb, useFlex32Cb, useFlex36Cb, useFlex33Cb, useMenu6Cb, useFlex30Cb, useFlex37Cb, useFlex34Cb, useImage17Cb, useImage18Cb, useButton11Cb, useTextBox34Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb } from "../page-cbs/test";
import "../page-css/test.css";
import "../custom/test";

export default function Test() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex38Props = useStore((state)=>state["test"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["test"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex35Props = useStore((state)=>state["test"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["test"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex31Props = useStore((state)=>state["test"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["test"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["test"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["test"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex36Props = useStore((state)=>state["test"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["test"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex33Props = useStore((state)=>state["test"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["test"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Menu6Props = useStore((state)=>state["test"]["Menu6"]);
const Menu6IoProps = useIoStore((state)=>state["test"]["Menu6"]);
const Menu6Cb = useMenu6Cb()
const Flex30Props = useStore((state)=>state["test"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["test"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex37Props = useStore((state)=>state["test"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["test"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex34Props = useStore((state)=>state["test"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["test"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Image17Props = useStore((state)=>state["test"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["test"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image18Props = useStore((state)=>state["test"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["test"]["Image18"]);
const Image18Cb = useImage18Cb()
const Button11Props = useStore((state)=>state["test"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["test"]["Button11"]);
const Button11Cb = useButton11Cb()
const TextBox34Props = useStore((state)=>state["test"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["test"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["test"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["test"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["test"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["test"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["test"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["test"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["test"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["test"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["test"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["test"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["test"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["test"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()

  return (<>
  <Flex1 className="p-test Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Flex1 className="p-test Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex1 className="p-test Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image1 className="p-test Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex1>
<Flex1 className="p-test Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image1 className="p-test Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-test Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Flex1 className="p-test Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox1 className="p-test TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox1 className="p-test TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox1 className="p-test TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-test Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Flex1 className="p-test Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Button1 className="p-test Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex1>
<Menu1 className="p-test Menu6 bpt" {...Menu6Props} {...Menu6Cb} {...Menu6IoProps}>
<Flex1 className="p-test Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<TextBox1 className="p-test TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox1 className="p-test TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox1 className="p-test TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox1 className="p-test TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex1>
</Menu1>
</Flex1>
</Flex1>
  </>);
}
