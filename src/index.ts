import { Reducer, applyMiddleware, createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';
import {
  Provider, connect, useSelector, useDispatch,
} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import ConfigFactory from './config/factory/configFactory';
import * as persistentActions from './storage/persistentActions';
import ApplicationTypesEnum from './models/config/applicationTypesEnum';
import { ConfigModel } from './models/config/configModel';
import { PersistentStateModel } from './models/persistentStore/persistentStateModel';
import { RootState, rootReducer, persistConfig } from './rootReducer';
import ProfileService from './services/profileService';
import RatingsService from './services/ratingsService';
import FixesService from './services/fixesService';
import * as notificationActions from './slices/notificationSlice';
import * as userSlice from './slices/userSlice';
import { FixRequestService, FixTemplateUpdateRequest, FixTemplateCreateRequest } from './services/fixRequestService';
import * as fixRequestSlice from './slices/fixRequestSlice';
import * as fixTemplateSlice from './slices/fixTemplateSlice';
import { ProfileModel } from './slices/profileSlice';
import NotificationModel from './models/notification/notificationModel';
import { FixesModel, FixTagModel } from './slices/fixesSlice';
import { UserSummaryModel } from './models/user/userSummaryModel';
import { RatingsModel } from './slices/ratingSlice';
import {
  AddressModel, Category, Type, Unit,
} from './models/common';
import Status from './models/common/fixTemplateStatus';
import { Schedule } from './models/common/scheduleModel';

const persistedRootReducer: Reducer<RootState & PersistPartial, any> = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedRootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {
  ConfigFactory,
  Provider,
  PersistGate,
  store,
  persistor,
  persistentActions,
  notificationActions,
  fixTemplateSlice as fixTemplateActions,
  fixRequestSlice as fixRequestActions,
  userSlice as userActions,
  ProfileService,
  RatingsService,
  FixesService,
  FixRequestService,
  Status as FixTemplateStatus,
  connect,
  useSelector,
  useDispatch,
};

type UserModel = userSlice.UserModel;
type FixRequestModel = fixRequestSlice.FixRequestModel;
type SectionModel = fixRequestSlice.SectionModel;
type SectionDetailsModel = fixRequestSlice.SectionDetailsModel;
type TagModel = fixRequestSlice.TagModel;
type FixTemplateModel = fixTemplateSlice.FixTemplateModel;
type FixTemplateSection = fixTemplateSlice.FixTemplateSection;
type FixTemplateSectionField = fixTemplateSlice.FixTemplateSectionField;

export type {
  ConfigModel as Config,
  PersistentStateModel as PersistentState,
  RootState as StoreState,
  FixRequestModel,
  NotificationModel,
  ProfileModel,
  RatingsModel,
  FixesModel,
  FixTagModel,
  UserModel,
  FixTemplateModel,
  FixTemplateSection,
  SectionModel,
  SectionDetailsModel,
  TagModel,
  AddressModel,
  ApplicationTypesEnum,
  UserSummaryModel,
  Category,
  Type,
  Unit,
  FixTemplateSectionField,
  FixTemplateUpdateRequest,
  FixTemplateCreateRequest,
  Schedule,
};
