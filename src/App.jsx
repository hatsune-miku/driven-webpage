import './App.scss'
import {Box, Button, Divider, ListItemDecorator, Tab, TabList, Tabs} from "@mui/joy"
import {Business, Home, Person} from "@mui/icons-material"
import BusinessPage from "./widget/BusinessPage.jsx"
import AboutPage from "./widget/AboutPage.jsx"
import {useState} from "react"
import InformationDialog from "./widget/InformationDialog.jsx"
import text from './data/text.json'

export default function App() {
    const [showDialog, setShowDialog] = useState(false)
    const [dialogTitle, setDialogTitle] = useState('')
    const [dialogContent, setDialogContent] = useState({})

    const navPages = [
        {
            id: 'home',
            label: "Home",
            icon: <Home/>,
        },
        {
            id: 'business',
            label: "Business",
            icon: <Business/>,
        },
        {
            id: 'about',
            label: "About",
            icon: <Person/>,
        }
    ]

    function handleStartForFree() {
        document.location.href = "https://www.figma.com/file/ygmPTY1OdORcTuie8jnGHW/Delivery-App-(Community)?node-id=0-1&t=yCuy9rce82LTJVRO-0"
    }

    function handleLearnMore() {
        setDialogTitle('About Driven')
        setDialogContent(text.benefits)
        setShowDialog(true)
    }

    function handleClose() {
        setShowDialog(false)
    }

    function handleTabChange(e, value) {
        document.getElementById(navPages[value].id).scrollIntoView()
    }

    function handleVideo(video) {
        if (video) {
            video.pause()
            video.load()
            video.play()
        }
    }

    const slogan = <Box sx={{
        lineHeight: 1,
        fontSize: '64px',
        fontWeight: '800',
    }}>
        {[
            'Low profit',
            <span style={{ color: 'rgb(59, 134, 195)' }}>delivery network</span>,
            'built for efficiency.',
        ].map(s => <div key={s}>{s}</div>)}
    </Box>

    const titleTile = <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        left: 0,
        top: 0,
        width: '100%',
        height: '70px',
    }}>
        <Box>
            <img style={{width: '18rem'}} src="driven.png"/>
        </Box>
        <Tabs
            aria-label="Icon tabs"
            defaultValue={0}
            onChange={handleTabChange}
        >
            <TabList variant="plain" size="lg">
                {
                    navPages.map((page, index) =>
                        <Tab key={index}>
                            <ListItemDecorator>
                                {page.icon}
                            </ListItemDecorator>
                            {page.label}
                        </Tab>
                    )
                }
            </TabList>
        </Tabs>
    </Box>

    const title = <Box sx={{
        position: 'relative',
        height: '640px',
        marginTop: '16px',
        paddingLeft: '128px',
        overflow: 'hidden',
    }}>
        <div style={{
            margin: '16px 48px 0 0',
            padding: '16% 0 0 0',
            fontSize: '48px',
            fontWeight: 'bold',
        }}>
            {slogan}
        </div>

        <Box sx={{mt: 4}}>
            <Button onClick={handleStartForFree} size="lg" sx={{fontWeight: 'bold'}}>
                Start for Free
            </Button>
            <Button onClick={handleLearnMore} size="lg" variant="soft" sx={{fontWeight: 'bold', ml: 1}}>
                Learn More
            </Button>
        </Box>

        <video ref={handleVideo} preload="auto" autoPlay loop muted playsInline style={{
            position: 'absolute',
            height: '640px',
            left: 0,
            top: 0,
            width: '100%',
            objectFit: 'cover',
            opacity: '0.3',
            zIndex: -1,
            filter: 'blur(6px)',
            scale: '1.1',
        }}>
            <source src="background.mp4" type="video/mp4"/>
        </video>
    </Box>


    return <>
        <div className="App">
            <Box id="home" sx={{paddingTop: '60px', paddingLeft: '60px', paddingRight: '60px', paddingBottom: 0}}>
                {titleTile}
            </Box>

            {title}

            <Box id="business" sx={{m: '64px'}}>
                <BusinessPage/>
            </Box>

            <Box id="about" sx={{m: '64px'}}>
                <AboutPage/>
            </Box>

            {
                showDialog && <InformationDialog
                    title={dialogTitle}
                    content={dialogContent}
                    handleClose={handleClose}
                />
            }
        </div>
    </>
}
