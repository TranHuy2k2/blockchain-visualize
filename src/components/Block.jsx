import { Button, Card, Divider, Input, InputNumber } from "antd";
import {
  PlusCircleOutlined,
  IdcardOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs/esm/index.js";
function Block({ block }) {
  const [isHacking, setHacking] = useState(false);
  const [data, setData] = useState({
    id: block.data.id,
    money: block.data.money,
  });
  return (
    <Card
      style={{ width: "400px", margin: "auto", marginTop: "40px" }}
      title={<p className="text-center">{`${block.hash}`}</p>}
    >
      {block.isGenesis ? (
        <div>
          <p className="text-center text-2xl font-bold my-0">Genesis Block</p>
          <p className="italic text-center">
            {dayjs(block.timestamp).format("DD-MM-YYYY HH:mm:ss")}
          </p>
        </div>
      ) : (
        <div>
          <p className="text-center text-2xl font-bold my-0">
            Block #{block.index}
          </p>
          <p className="italic text-center mb-2">
            {dayjs(block.timestamp).format("DD-MM-YYYY HH:mm:ss")}
          </p>
          <Input
            className="w-full mt-2"
            addonBefore="# Previous"
            value={block.previousHash}
            disabled
          ></Input>
          <Input
            className="w-full mt-2"
            addonBefore={<IdcardOutlined />}
            value={data.id}
            disabled={!isHacking}
            onChange={(event) => {
              block.data.id = event.target.value;
              block.changed = true;
              setData({ ...data, id: event.target.value });
            }}
          ></Input>
          <InputNumber
            className="w-full mt-2"
            addonBefore={<DollarCircleOutlined />}
            value={data.money}
            disabled={!isHacking}
            onChange={(money) => {
              block.data.money = money;
              block.changed = true;
              setData({ ...data, money });
            }}
          ></InputNumber>
          <Divider />
          <div className="flex justify-end">
            <Button
              onClick={() => setHacking(!isHacking)}
              danger
              type="default"
            >
              {isHacking ? "Save" : "Hack"}
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}

export default Block;
