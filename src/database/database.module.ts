import { Module, Global } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '@src/foundation/constant/index.constant';

/**
 * The @Global() decorator makes the module global-scoped. Global modules should be registered only once, generally by the root or core module.
 * modules that wish to inject the DATA_SOURCE will not need to import the DatabaseModule in their imports array.
 *
 * Making everything global is not a good design decision.
 * Global modules are available to reduce the amount of necessary boilerplate.
 * The imports array is generally the preferred way to make the module's API available to consumers.
 */
@Global()
@Module({
  providers: [
    {
      provide: DATA_SOURCE,
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'Pa123457',
          database: 'hello-mysql',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true, // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
        });

        return dataSource.initialize();
      },
    },
  ],
  exports: [DATA_SOURCE],
})
export class DatabaseModule {}
