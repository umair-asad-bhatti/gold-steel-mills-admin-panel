import {PageHeader} from "../components/PageHeader.jsx";
import {Bar} from 'react-chartjs-2'
import {Chart } from 'chart.js/auto'
export const Dashboard=()=>{
    return (
        <div>
            <PageHeader title={'Dashboard'}/>
            <div className={'w-96 h-96'}>

                <Bar
                data={{
                    labels:['A','B','C'],
                    datasets:[{
                        label:'revenue',
                        data:[100,200,300]}
                    ]}
                }
                />
            </div>
        </div>
    )
}