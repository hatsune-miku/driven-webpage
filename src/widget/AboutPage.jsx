import {Box, Card, Chip, Container, Divider, Grid, IconButton, Typography} from "@mui/joy"
import '../assets/font/style.css'

export default function AboutPage() {
    function makeCredit(name, part, description) {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                my: 2,
            }}>
                <Box sx={{ textAlign: 'right' }}>
                    <Typography level="h2" fontSize="md" fontFamily="Gilroy-Bold">
                        {part}
                    </Typography>
                    <Typography level="h5" sx={{ width: '10rem' }} fontFamily="Gilroy-Bold">
                        <b>{name}</b>
                    </Typography>
                </Box>
                <Divider orientation="vertical" sx={{mx: 4}}/>
                <Typography level="body2">{description}</Typography>
            </Box>
        )
    }

    const credits = [
        {
            name: "Peng Zhou",
            part: "Contributor",
            description: "pzhou21@mun.ca",
        },
        {
            name: "Shijunyi Liu",
            part: "Contributor",
            description: "shijunyil@mun.ca",
        },
        {
            name: "Chengyuan Wen",
            part: "Contributor",
            description: "cwen@mun.ca",
        },
        {
            name: "Jiabao Guo",
            part: "Contributor",
            description: "jiabaog@mun.ca",
        },
        {
            name: "Zhen Guan",
            part: "Contributor",
            description: "zguan@mun.ca",
        },
    ]

    return <Container sx={{
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
    }}>
        <Typography level="h1" fontFamily="Gilroy-Bold">
            - TechOtakus -
        </Typography>
        <Typography level="h3" sx={{mb: 4}} fontFamily="Gilroy-Bold">
            Credits
        </Typography>
        <Box sx={{
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            alignSelf: 'center',
        }}>
            {
                credits.map((credit) => (
                    <Grid xs={6} key={credit.name}>
                        {makeCredit(credit.name, credit.part, credit.description)}
                    </Grid>
                ))
            }
        </Box>
    </Container>
}
