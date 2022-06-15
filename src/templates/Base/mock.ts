import { BaseProps } from '.';
import { data } from '../../components/api/dados.json';

export default {
  settings: data.setting,
  children: 'Olá mundo',
} as BaseProps;
