import { Button, Input, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import SectionHeader from "../../../../Components/molecules/SectionHeader";
import Container from "../../../../Components/organisms/Container";
import hackerRankUtil from "../../../../utils/hackerrank";

const useStyles = makeStyles({
    root: {
        marginTop: '24px'
    }
})

const onAbbreviationSubmit = (stringA, stringB) => {
    hackerRankUtil.abbreviation(stringA, stringB);
}
const Abbreviation = () => {
    const [stringA, setStringA] = useState("");
    const [stringB, setStringB] = useState("");
    const classes = useStyles();
    return (
        <Container>
            <SectionHeader sectionName="abbreviation" title="Abbreviation"></SectionHeader>
            <TextField label="String A" className="full-input" onChange={(e) => setStringA(e.target.value)}></TextField>
            <TextField label="String B" className="full-input" onChange={(e) => setStringB(e.target.value)}></TextField>
            <Button variant="contained" color="primary" classes={{ root: classes.root }} onClick={() => onAbbreviationSubmit(stringA, stringB)}>
                Submit
            </Button>
        </Container>
    )
}

export default Abbreviation;