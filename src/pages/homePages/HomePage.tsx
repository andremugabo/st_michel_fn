import { WelcomeMsg } from "../../components/homeComponents"
import { SlidingImage } from "../../components/homeComponents/SlidingImage"

export const HomePage: React.FC = () => {
    return (
        <>
            <SlidingImage />
            <WelcomeMsg />
        </>
    )
}