import type { FC } from "react"

interface Props {
    searches: string[];
    onLabelClicked: (item: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
    return (
        <div className="previous-searches">
            <h2>Previous Searches</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((item) => (
                        <li 
                        onClick={() => onLabelClicked(item)}
                        key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
