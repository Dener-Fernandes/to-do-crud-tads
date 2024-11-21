import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableTask1732152902395 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "task",
        columns: [
          {
            name: "task_id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "description",
            type: "text",
            isNullable: false,
          },
          // {
          //   name: "user_id",
          //   type: "int",
          //   isNullable: true, // Relacionamento com o User pode ser opcional
          // },
        ],
      }),
    );

    // await queryRunner.createForeignKeys("task", [
    //   new TableForeignKey({
    //     name: "fk_user_id",
    //     columnNames: ["user_id"],
    //     referencedColumnNames: ["user_id"],
    //     referencedTableName: "user",
    //     onDelete: "CASCADE",
    //   }),
    // ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey("task", "fk_user_id");
    await queryRunner.dropTable("task");
  }
}