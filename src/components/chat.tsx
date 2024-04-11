import { Message } from 'ai';

export const ChatHistory = ({ messages }: { messages: Message[] }) => {
  return (
    <>
      <ChatBubble
        role="juwiragiye"
        content="Hey, banyita juwiragiye ndi AI 🤖 ask me anything."
        time="12:45"
      />

      {messages.map((message) => (
        <ChatBubble
          key={message.id}
          role={message.role === 'user' ? 'You' : 'juwiragiye'}
          content={message.content}
          time={message.createdAt?.getTime().toString() || '12:45'}
        />
      ))}
    </>
  );
};

enum Position {
  start = 'start',
  end = 'end',
}
export const ChatBubble = ({
  role,

  content,
  time,
}: {
  role: string;

  content: string;
  time: string;
}) => {
  return (
    <div className="mt-2">
      <div>
        {role} <time>{time}</time>
      </div>

      <div>{content}</div>
    </div>
  );
};
