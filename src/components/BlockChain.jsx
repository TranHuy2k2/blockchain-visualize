import {
  Button,
  Col,
  FloatButton,
  Grid,
  Input,
  InputNumber,
  Modal,
  Row,
  message,
} from "antd";
import BlockChain from "../models/BlockChain";
import { useState } from "react";
import Block from "./Block";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  PlusCircleOutlined,
  IdcardOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

function BlockchainComponent() {
  const [blockchain, setBlockchain] = useState(new BlockChain());
  const [autoAnimateParent] = useAutoAnimate();
  const [isOpen, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage({ duration: 5 });
  const [data, setData] = useState({
    id: null,
    money: null,
  });
  const [error, setError] = useState({
    id: "",
    money: "",
  });

  const openModal = () => {};

  const addBlock = () => {
    if (!data.id || !data.money) {
      return messageApi.open({
        type: "error",
        content: "Vui lòng nhập đầy đủ thông tin",
      });
    }
    const newBlock = blockchain.addBlock(data);
    messageApi.open({
      type: "success",
      content: "Add Block Successfully",
    });
    setOpen(false);
  };
  const checkBlockChain = () => {
    const invalidBlock = blockchain.checkChainValidity();

    if (!invalidBlock) {
      messageApi.open({
        type: "success",
        content: "Blockchain hợp lệ",
      });
    } else {
      messageApi.open({
        type: "error",
        content: `Block {${invalidBlock.index}} là không hợp lệ`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Row ref={autoAnimateParent} dir="column" justify="center" align="middle">
        {blockchain.chains.map((block) => (
          <Col key={block.index} span={24}>
            <Block block={block} />
          </Col>
        ))}
        <div className="mt-5">
          <>
            <FloatButton
              icon={<PlusCircleOutlined />}
              onClick={() => setOpen(true)}
              type="default"
              style={{ right: 24 }}
            ></FloatButton>
            <FloatButton
              icon={<CheckCircleOutlined />}
              onClick={checkBlockChain}
              type="default"
              style={{ right: 94 }}
            ></FloatButton>
          </>
          <Modal
            onCancel={() => setOpen(false)}
            title={<p className="text-center">Thêm thông tin học phí</p>}
            open={isOpen}
            onOk={addBlock}
          >
            <Input
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
              placeholder="Nhập MSSV..."
              addonBefore={<IdcardOutlined />}
            ></Input>
            <InputNumber
              value={data.money}
              onChange={(money) => setData({ ...data, money })}
              className="mt-5"
              placeholder="Nhập số tiền..."
              addonBefore={<DollarCircleOutlined />}
            />
          </Modal>
        </div>
      </Row>
    </>
  );
}
export default BlockchainComponent;
