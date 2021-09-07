import React, {useMemo, useState, useEffect} from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import gains from '../../repositories/gains'
import expenses from '../../repositories/expensives'

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}
interface IData {
    description : string;
    amount: string;
    frequency: string;
    data: string;
    tagColor: string;
}
const List : React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([])  
    const { type }  = match.params;

    const page = useMemo(() => {
        return type === "input" ? {
            title:"Entrada",
            lineColor: '#F7931B',
            typeData: gains
        }:{
            title:"Saída",
            lineColor: '#E44C4E',
            typeData: expenses

        }
    },[type])

    const months = [
        {label: "Julho", value: 7},
        {label: "Agosto", value: 8},
        {label: "Setembro", value: 9}
    ];
    const years = [
        {label: "2020", value: 2020},
        {label: "2019", value: 2019},
        {label: "2018", value: 2018}
    ];

    useEffect(() => {
        const response = page.typeData.map(iten => {
            return {
                description: iten.description,
                amount: iten.amount,
                frequency: iten.frequency,
                data: iten.date,
                tagColor: iten.frequency === "recorrente" ? "#4E41F0":"#E44C4E"
            }
        })
        setData(response)
    }, [])

    const lists = []
    for (let i = 0; i < 25; i++) {
        lists.push(i)
    }
    return (
        <Container>
            <ContentHeader title={page.title} lineColor={page.lineColor}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>
            <Filters>
                <button type="button" className="tag-filters tag-filters-recurrent">Recorrentes</button>
                <button type="button" className="tag-filters tag-filters-eventual">Eventuais</button>
            </Filters>

            <Content>
                {
                    data.map((element, index) => (
                        <HistoryFinanceCard
                            key={index}
                            amount={'R$ ' + element.amount}
                            subTitle={element.data}
                            tagColor={element.tagColor}
                            title={element.description}               
                        />
                    ))
                }
                
            </Content>
        </Container>
    );
}

export default List ;