import React, {useState} from 'react';


type FilterType = 'all' | 'dollars' | 'rubles'
export const Filter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let currentMoney = money
    let [filter, SetFilter] = useState('all')

    const onClickFilterHandler = (name: FilterType) => {
        SetFilter(name)
    }

    if (filter === 'rubles') {
        currentMoney = currentMoney.filter((FilterMoney) => FilterMoney.banknots === 'RUBLS')
    }
    if (filter === 'dollars') {
        currentMoney = currentMoney = currentMoney.filter((FilterMoney) => FilterMoney.banknots === 'Dollars')
    }
    return (
        <>
            <ul>
                {currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                            <span>{}</span>
                        </li>

                    )
                })}
            </ul>

            <button name='FilterAll' onClick={() => onClickFilterHandler('all')}>all</button>
            <button name='FilterRuble' onClick={() => onClickFilterHandler('rubles')}>ruble</button>
            <button name='FilterDollar' onClick={() => onClickFilterHandler('dollars')}>dollar</button>
        </>

    );
};

