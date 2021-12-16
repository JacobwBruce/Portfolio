import React, { FC } from 'react';

interface Props {
    uri: string;
}

const NavbarItem: FC<Props> = ({ uri, children }) => {
    return (
        <li>
            <a
                href={uri}
                className='block w-full py-3 transition hover:text-blue-600 dark:text-gray-300'
            >
                {children}
            </a>
        </li>
    );
};

export default NavbarItem;
