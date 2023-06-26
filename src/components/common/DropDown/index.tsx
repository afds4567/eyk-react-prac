import { styled } from "styled-components";

const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`;

const DropdownControl = styled.div<{ hasError: boolean }>`
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border: ${({ theme, hasError }) =>
    hasError
      ? `1px solid ${theme.colors.red}`
      : `1px solid ${theme.colors.gray}`};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 10px;
`;

const DropdownValue = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;

const DropdownPlaceholder = styled.div`
  color: #757575;
  font-size: 14px;
  min-height: 16px;
  line-height: 16px;
`;

const DropdownArrow = styled.div<{ isOpen?: boolean }>`
  border-color: ${({ isOpen }) =>
    isOpen
      ? "transparent transparent #222"
      : "#000000 transparent transparent"};
  border-width: ${({ isOpen }) => (isOpen ? "0 5px 5px" : "5px 5px 0")};
  border-style: solid;
  height: 0;
  position: absolute;
  right: 10px;
  top: 14px;
`;

const DropdownMenu = styled.div`
  background-color: #fff;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 2;
`;

const DropdownOption = styled.div`
  padding: 8px 12px 8px 12px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownItem = (props: any) => {
  const { item } = props;

  return (
    <Flex>
      <div>{item}</div>
    </Flex>
  );
};

const Dropdown = (props: any) => {
  return (
    <DropdownRoot>
      <DropdownControl hasError={props.hasError}>
        {props.value ? (
          <DropdownValue>{props.value}</DropdownValue>
        ) : (
          <DropdownPlaceholder>{props.placeholder}</DropdownPlaceholder>
        )}

        <DropdownArrow isOpen={true} />
      </DropdownControl>
      {props.isOpen && (
        <DropdownMenu>
          {props.options.map((item: any) => (
            <DropdownOption key={item} onClick={() => {}}>
              <DropdownItem item={item} />
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  );
};

export default Dropdown;
