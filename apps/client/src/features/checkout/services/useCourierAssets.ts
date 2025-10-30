import jneLogo from "@/assets/logo/jne.svg";
import jntLogo from "@/assets/logo/j&t.svg";
import sicepatLogo from "@/assets/logo/sicepat.svg";
import anterajaLogo from "@/assets/logo/anteraja.svg";

export function getCourierLogo(code: string) {
  switch (code.toLowerCase()) {
    case "jne": return jneLogo;
    case "jnt":
    case "j&t": return jntLogo;
    case "sicepat": return sicepatLogo;
    case "anteraja": return anterajaLogo;
    default: return jneLogo;
  }
}
