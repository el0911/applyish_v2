"use client"
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  type: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, type }) => {
  return (
    <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-gray-800 prose-markdown">
      {type === 'md' || type === 'mdx' ? (
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

export default MarkdownRenderer;
