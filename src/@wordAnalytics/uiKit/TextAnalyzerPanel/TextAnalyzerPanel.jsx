import Stats from "../Stats/Stats"
import TextArea from "../TextArea/TextArea"
import './TextAnalyzerPanel.css'

function TextAnalyzerPanel() {
    return (
        <main className="analizer-panel">
            <TextArea />
            <Stats />
        </main>
    )
}

export default TextAnalyzerPanel