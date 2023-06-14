import * as React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { MARKS, BLOCKS, Document } from '@contentful/rich-text-types';

export interface TextWithDescriptionProps {
  title: string;
  text: object;
}

const TextWithDescription: React.FC<TextWithDescriptionProps> = ({
  title,
  text
}) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <b className="font-bold">{text}</b>,
      [MARKS.ITALIC]: (text: string) => <i className="font-italic">{text}</i>,
      [MARKS.UNDERLINE]: (text: string) => <u className="underline">{text}</u>,
      [MARKS.CODE]: (text: string) => (
        <code className="font-mono px-1 py-2 mx-1 bg-gray-100 rounded text-sm">
          {text}
        </code>
      )
    },
    renderNode: {
      [BLOCKS.TABLE]: (_node: any, children: React.ReactNode) => (
        <table className='table-auto'>
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (_node: any, children: React.ReactNode) => <tr className="border border-gray-200">{children}</tr>,
      [BLOCKS.TABLE_CELL]: (_node: any, children: React.ReactNode) => <td className='border border-gray-200 px-4 py-2'>{children}</td>,
    }
  };
  return (
    <section className='flex flex-col items-center justify-center text-center pt-24 h-2/6' aria-label="Text with description section">
      <p className='text-4xl font-bold mb-4'>{title}</p>
      <div>{renderRichText(text, options)}</div>
    </section>
  )
};

export default TextWithDescription;