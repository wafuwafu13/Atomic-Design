import React from 'react';
import Txt, { InfoTxt, WarningTxt } from './index'

export default stories => stories
  .add('テキスト - S', () => <Txt size='s'>テキストを表示</Txt>)
  .add('情報テキスト - M', () => <InfoTxt size='m'>情報テキストを表示</InfoTxt>)
  .add('警告テキスト - L', () => <WarningTxt size='l'>警告テキストを表示</WarningTxt>)