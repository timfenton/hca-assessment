import React, { useState, useMemo } from 'react';
import data from './data/data.json';
import HCAButtonSecondary from '../../components/shared/buttons/hca-btn-secondary';

interface Offering {
    link: string;
    title: string;
}

interface GroupedOfferings {
    [letter: string]: Offering[];
}

const FilterableOfferings: React.FC = (): React.ReactElement => {
  const [filter, setFilter] = useState<string | null>(null);

  const groupedData = useMemo(() => {
    const sortedTerms = [...data.termList].sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      const grouped: GroupedOfferings = sortedTerms.reduce(
        (acc: GroupedOfferings, item: Offering) => {
          let firstChar = item.title[0];

          if (/^[A-Za-z]$/.test(firstChar)) {
            firstChar = firstChar.toUpperCase();
          } else {
            firstChar = '#';
          }

          if (!acc[firstChar]) {
            acc[firstChar] = [];
          }

          acc[firstChar].push(item);

          return acc;
        },
        {}
      );
  
      return grouped;
  }, []);

  const filteredData = filter
    ? { [filter]: groupedData[filter] }
    : groupedData;

  return (
    <div className="flex flex-col space-y-5 items-center bg-white">
      <div className="flex flex-row w-11/12 sm:w-1/2 items-center space-x-3 justify-evenly text-xl mt-6 flex-wrap">
        {[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '#'].map((char) => (
          <button
            key={char}
            onClick={() => setFilter(char)}
            disabled={!groupedData[char]}
            className="text-hca-link-active disabled:text-gray-300"
          >
            {char}
          </button>
        ))}
      </div>
      <div className="flex w-full bg-gray-100 items-center justify-center">
        <div className="flex flex-col w-11/12 sm:w-1/2 bg-white p-5 shadow-xl mt-5 mb-10">
            {filter && 
                <div className="flex justify-between items-right mb-5 w-full">
                    <HCAButtonSecondary
                        className="w-20 rounded-sm"
                        ariaLabel="Reset filter"
                        buttonAction={() => setFilter(null)}
                    >
                        Reset
                    </HCAButtonSecondary>
                </div>}
            {Object.entries(filteredData).map(([letter, items]) => (
                <div key={letter} className='mb-5'>
                    <h2 className='underline underline-offset-4 mb-3'>{letter}&nbsp;&nbsp;&nbsp;</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((item) => (
                            <a key={item.title} href={item.link} className="text-hca-link-active hover:underline">
                            {item.title}
                            </a>
                        ))}
                    </div>
                </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default FilterableOfferings;
