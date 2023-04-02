import '../assets/font/style.css'
import './BusinessPage.scss'
import text from '../data/text.json'
import DocumentWidget from "./DocumentWidget.jsx"

export default function BusinessPage() {
    return <DocumentWidget content={text.text} />
}
