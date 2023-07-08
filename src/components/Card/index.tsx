"use client";

const Card = (props: any) => {

  return (
    <div style={{height: 'fit-content'}} className={`${props?.cardContainer || ''} block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-yellow-500 dark:border-yellow-400 dark:hover:bg-gray-700`}>
        {props?.heading && <h5 className={`${props?.cardHeading || ''} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>{props?.heading || 'heading'}</h5>}
        {props?.desc && <p className={`${props?.cardDesc || ''} font-normal text-gray-700 dark:text-gray-400`}>{props?.desc || 'description'}</p>}
    </div>
  );
};

export default Card;
