import {
  Box,
  Flex,
  Icon,
  useEditableControls,
  ButtonGroup,
  EditableInput,
  EditablePreview,
  Editable,
  IconButton,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

import { RiDeleteBinFill } from "react-icons/ri";

const Card = ({ task, Dfn }) => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton m="2" icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton m="2" icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          m="2"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }
  return (
    <Flex
      border="2px solid gray"
      m="5"
      p="3"
      w="100%"
      justify="center"
      align="center"
      flexDirection="column"
      rounded="10"
    >
      <Editable
        textAlign="center"
        defaultValue={task}
        fontSize="2xl"
        isPreviewFocusable={false}
      >
        <EditablePreview />
        <EditableInput />
        <EditableControls />

        <Box m="1" p="5">
          <Icon m="2" as={RiDeleteBinFill} onClick={() => Dfn(task)} />
        </Box>
      </Editable>
    </Flex>
  );
};

export default Card;
