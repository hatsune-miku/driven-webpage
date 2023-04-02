import {Container, Divider, Typography} from "@mui/joy";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function DocumentWidget(props) {
    // technology + reduce carbon footprint + industry deliveries
    const headerStyle = {
        fontFamily: 'Gilroy-Bold',
        mt: 8,
    }
    const bodyStyle = {
        fontSize: '2rem',
        mt: 5,
    }

    return props.content.map((item, index) => {
        const className = item.special === 'low-carbon'
            ? 'fancy-header'
            : ''

        return <Container key={index}>
            <Typography className={className} level="h1" sx={headerStyle}>
                {item.title}
            </Typography>
            <Typography level="body2" sx={bodyStyle}>
                {
                    item.body.map(p => {
                        switch (p.style) {
                            case 'plain':
                                return <Typography
                                    key={p.text}
                                    variant="plain"
                                >
                                    {p.text}
                                </Typography>

                            case 'soft':
                                return <Typography
                                    key={p.text}
                                    variant={p.style === 'plain' ? 'plain' : 'soft'}
                                    sx={p.style === 'plain' ? {} : {
                                        fontWeight: 'bold',
                                        color: 'rgb(47, 105, 214)'
                                    }}
                                >
                                    {p.text}
                                </Typography>

                            case 'markdown':
                                return <ReactMarkdown
                                    key={p.text}
                                    remarkPlugins={[remarkGfm]}
                                    children={p.text}
                                    components={{
                                        p: ({node, ...props}) => <Typography>
                                            {props.children}
                                        </Typography>
                                    }}
                                />
                        }
                    })
                }
            </Typography>
            <Divider orientation="horizontal" sx={{mt: 4}}/>
        </Container>
    })
}
