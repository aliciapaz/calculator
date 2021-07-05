import Button from './Button';

const ButtonPanel = () => {
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  return (
    <div>
      {groups.map((group) => (
        <div key={`group-${groups.indexOf(group)}`}>
          {group.map((btnName) => (
            <Button
              key={`btnName-${group.indexOf(btnName)}`}
              btnName={btnName}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
