import NavLink from "../../Components/atoms/NavLink";
import SectionHeader from "../../Components/molecules/SectionHeader";
import Container from "../../Components/organisms/Container";

const HackerRank = () => {
    return (
        <Container pageClass="hackerrank">
            <SectionHeader sectionName="hackerank" title="HackerRank" >
                <h3>Dynamic Programing</h3>
            </SectionHeader>
            <NavLink link={"/hackerrank/dynamicProgramming/abbreviation"} label="abbreviation"></NavLink>
            <NavLink link={"/hackerrank/dynamicProgramming/candies"} label="candies"></NavLink>
        </Container>
    )
}

export default HackerRank;