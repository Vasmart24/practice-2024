import StartResButton from '../components/Button/resourcesScreenButton/StartResButton.jsx';
import EasyResButton from '../components/Button/resourcesScreenButton/EasyResButton.jsx';
import MediumResButton from '../components/Button/resourcesScreenButton/MediumResButton.jsx';
import HardResButton from '../components/Button/resourcesScreenButton/HardResButton.jsx';

export default function ScreenGetResources() {
    return(
        <div>
            <StartResButton></StartResButton>
            <EasyResButton></EasyResButton>
            <MediumResButton></MediumResButton>
            <HardResButton></HardResButton>
        </div>
    )
};
