import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const DropdownMenu = ({ menus, selected, onSelect }) => {

    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <Button onClick={() => setOpen(!open)}>
                {selected}
                <Arrow open={open}><FaAngleDown /></Arrow>
            </Button>

            {open && (
                <Menu>
                    {menus.map((item) => (
                        <MenuItem
                            key={item}
                            active={item === selected}
                            onClick={() => {
                                onSelect(item);
                                setOpen(false);
                            }}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </Wrapper>
    );
};

export default DropdownMenu;

const Wrapper = styled.div`
    position: relative;
`;

const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid #93D074;
    background: white;
    color: #68AB46;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    white-space: nowrap; 

    cursor: pointer;
`;

const Arrow = styled.span`
    transition: all 0.2s ease;
    transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
`;

const Menu = styled.div`
    position: absolute;
    top: 45px;
    width: 80px;

    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);

    padding: 8px 0;
    z-index: 10;
`;

const MenuItem = styled.div`
    padding: 10px;
    text-align: center;
    cursor: pointer;
    color: ${({ active }) => (active ? "#68AB46" : "black")};

    &:hover {
        background: #f5f5f5;
    }
`;
