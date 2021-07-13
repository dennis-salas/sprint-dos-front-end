import React from 'react';
import GetGuajalotasByCategory from '../Selectors/GetGuajalotasByCategory';
import GuajalotasCard from './GuajalotasCard';

const GuajalotasList = ({ category }) => {

    const data = GetGuajalotasByCategory(category);

    return (
        <div>
            {
                data.map(ele => (
                    <div>
                        <GuajalotasCard key={ele.id}
                            {...ele}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default GuajalotasList
