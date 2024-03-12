import styled from "styled-components";

export default function randColor() {
	const red = Math.round(Math.random() * 255);
	const green = Math.round(Math.random() * 255);
	const blue = Math.round(Math.random() * 255);
	return `${red}, ${green}, ${blue}`;
}

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    width: calc(100% / ${props => props.countEements});
    background-color: RGB(${() => randColor()});
    color: aliceblue;   
`;

const Label = styled.span``;

const Percentage = styled.span`
    margin-top: 10px;    
`;

const Section = styled.section`
    width: 375px;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.8);
    margin: 15px;    
`;

const Title = styled.h2`
    margin: 0;
    padding: 30px 0;
    width: 100%;
    text-transform: uppercase;
    text-align: center;    
`;

const StatList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;    
`;

export {ListItem, Label, Percentage, Section, Title, StatList} 