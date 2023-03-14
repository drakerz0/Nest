import { Module } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistController } from './watchlist.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WatchList } from './models/watchlist.models';

@Module({
  imports: [SequelizeModule.forFeature([WatchList])],
  providers: [WatchlistService],
  controllers: [WatchlistController]
})
export class WatchlistModule {}
