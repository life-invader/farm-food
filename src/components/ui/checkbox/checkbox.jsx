import { Checkbox } from './styled';
import HiddenInput from '../../ui/hidden-input/hidden-input';

function StyledCheckbox({ labelComponent, text = '', value = '', checked = false, onChange }) {
  const Label = labelComponent;

  return (
    <Label>
      <span>{text}</span>
      <HiddenInput type="checkbox" value={value} checked={checked} onChange={onChange} />
      <Checkbox isChecked={checked} />
    </Label>
  );
}

export default StyledCheckbox;
