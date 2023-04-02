import './InformationDialog.scss'
import {Box} from "@mui/joy"
import DocumentWidget from "./DocumentWidget.jsx";

export default function InformationDialog(props) {
    const background = <div onClick={props.handleClose} className="background"></div>
    const dialog = <Box className="dialog">
        <h2>{ props.title }</h2>
        <DocumentWidget content={props.content} />
    </Box>

    return <Box>
        { background }
        { dialog }
    </Box>
}
