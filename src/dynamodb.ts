import {
  DynamoDB,
  DynamoDBClient,
  GetItemCommand
} from '@aws-sdk/client-dynamodb';
import { CommonItem } from './models/item';

class TotpItemRepository {
  private client: DynamoDBClient;
  private tableName: string;

  constructor(client: DynamoDBClient, tableName: string) {
    this.client = client;
    this.tableName = tableName;
  }

  async getItem(userId: string): CommonItem | null {
    const command = new GetItemCommand({
      Key: {
        userId: { S: userId },
      },
      TableName: this.tableName,
    });
    try {
      const results = await this.client.send(command);
      if (!results.Item) {
        return null;
      }

      return results.Item. as CommonItem;
    } catch (err) {
      console.error(err);
    }
  }
}

(async () => {
  const client = new DynamoDBClient({ region: 'us-west-2' });
  const command = new GetItemCommand({
    Key: userId,
    TableName: 'otp-table',
  });
  try {
    const results = await client.send(command);
    console.log(results.TableNames.join('\n'));
  } catch (err) {
    console.error(err);
  }
})();
