import { getFileUrlFromId } from "@lib/sanity";
import Bold from "./Bold";
import File from "./File";
import Heading from "./Heading";
import Image from "./Image";
import InlineCode from "./InlineCode";
import Italic from "./Italic";
import Link from "./Link";
import ListItem from "./ListItem";
import Normal from "./Normal";
import OrderedList from "./OrderedList";
import Qoute from "./Qoute";
import UnorderedList from "./UnorderedList";

export const serializers = {
  // headings
  h1: (props) => <Heading variant="h1" {...props} />,
  h2: (props) => <Heading variant="h2" {...props} />,
  h3: (props) => <Heading variant="h3" {...props} />,
  h4: (props) => <Heading variant="h4" {...props} />,
  h5: (props) => <Heading variant="h5" {...props} />,
  h6: (props) => <Heading variant="h6" {...props} />,

  // text
  normal: (props) => <Normal {...props} />, // text block
  em: (props) => <Italic {...props} />,
  strong: (props) => <Bold {...props} />,
  blockquote: (props) => <Qoute {...props} />,
  link: (props) => (
    <Link blank underline preview={false} className="text-lg" {...props} />
  ),
  code: (props) => <InlineCode {...props} />,

  // lists
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem {...props} />,

  // others
  file: (file) => (
    <File name={file.name} url={getFileUrlFromId(file.asset._ref)} />
  ),

  image: (props) => <Image data={props} alt="" />,
};
