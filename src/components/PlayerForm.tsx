import {Controller, UseFormReturn} from 'react-hook-form';
import classNames from 'classnames';

import {Input} from './ui/Input';

import avatar1 from '@/assets/images/avatars/1.png';
import avatar2 from '@/assets/images/avatars/2.png';
import avatar3 from '@/assets/images/avatars/3.png';
import avatar4 from '@/assets/images/avatars/4.png';
import avatar5 from '@/assets/images/avatars/5.png';
import avatar6 from '@/assets/images/avatars/6.png';
import avatar7 from '@/assets/images/avatars/7.png';
import avatar8 from '@/assets/images/avatars/8.png';
import avatar9 from '@/assets/images/avatars/9.png';
import avatar10 from '@/assets/images/avatars/10.png';
import avatar11 from '@/assets/images/avatars/11.png';
import avatar12 from '@/assets/images/avatars/12.png';
import {StartGameForm} from '@/helpers/types';

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
];

interface PlayerFormProps {
  form: UseFormReturn<StartGameForm>;
  name: 'red' | 'blue';
}

export const PlayerForm: React.FC<PlayerFormProps> = ({name, form}) => {
  const {
    register,
    control,
    formState: {errors},
  } = form;

  return (
    <div
      className={classNames('pb-6 flex flex-col gap-2', name === 'red' ? 'pr-4 border-r border-yellow-dark' : 'pl-4')}
    >
      <div className="flex gap-4">
        <div
          className={classNames('w-16 h-16 rounded-full border-8', name === 'blue' ? 'checker-blue' : 'checker-red')}
        />
        <Input
          required
          label={name}
          placeholder="Enter name"
          {...register(`${name}.name`, {required: true})}
          error={errors[name]?.name}
        />
      </div>
      <h4 className="mt-4">Choose avatar</h4>
      <Controller
        control={control}
        rules={{required: true}}
        name={`${name}.avatar`}
        render={({field: {onChange, value}}) => (
          <div className="grid grid-cols-4 gap-4">
            {avatars.map((avatar) => (
              <img
                key={avatar}
                src={avatar}
                className={classNames(
                  'rounded-full',
                  value === avatar && name === 'red'
                    ? 'ring-4 ring-red'
                    : value === avatar && name === 'blue'
                    ? 'ring-4 ring-blue'
                    : ''
                )}
                onClick={() => onChange(avatar)}
              />
            ))}
          </div>
        )}
      />
    </div>
  );
};
