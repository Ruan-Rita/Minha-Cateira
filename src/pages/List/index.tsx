import React, {useMemo, useState, useEffect} from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import gains from '../../repositories/gains'
import expenses from '../../repositories/expensives'

import formatCurrency from "../../util/formatCurrency";
import formatDate from "../../util/formatDate";
import listOfMonths from "../../util/months";


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
    console.log("Month: ")
    console.log(String(new Date().getMonth() + 1))
    console.log("Year: ")
    console.log(String(new Date().getFullYear()))

    const [monthSelected, setMonhtSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
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

    
    // const years = [
    //     {label: "2021", value: 2021},
    //     {label: "2020", value: 2020},
    //     {label: "2019", value: 2019},
    //     {label: "2018", value: 2018}
    // ];
    const years = useMemo(() => {
        let uniqueYear: number[] = [];
        page.typeData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            !uniqueYear.includes(year) && uniqueYear.push(year)

        });
        return uniqueYear.map(year => {
            return {
                value: year,
                label: year
            }
        })
    }, [page.typeData]);
    const months = useMemo(() => {
        
        return listOfMonths.map((item, index) => {
            return {
                value: index+1,
                label: item
            }
        })
        
    }, []);

    useEffect(() => {
        const filtreredDate = page.typeData.filter(item => {
            const date = new Date(item.date)
            const month = String(date.getMonth()+1)
            const year = String(date.getFullYear())

            return month === monthSelected && year === yearSelected

        })
        const response = filtreredDate.map(iten => {
            return {
                description: iten.description,
                amount: formatCurrency(Number(iten.amount)),
                frequency: iten.frequency,
                data: formatDate(iten.date),
                tagColor: iten.frequency === "recorrente" ? "#4E41F0":"#E44C4E"
            }
        })
        setData(response)
    }, [page.typeData, monthSelected, yearSelected])

    const lists = []
    for (let i = 0; i < 25; i++) {
        lists.push(i)
    }
    return (
        <Container>
            <ContentHeader title={page.title} lineColor={page.lineColor}>
                <SelectInput defaultValue={monthSelected} options={months} onChange={(event) => setMonhtSelected(event.target.value)}/>
                <SelectInput defaultValue={yearSelected} options={years} onChange={(event) => setYearSelected(event.target.value)}/>
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