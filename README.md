# Chat-Space DB設計

## Usersテーブル
|id|Name|E-mail|Options|type|coments_id|member_id|group_id|
|--|----|------|-------|----|----------|---------|--------|
|integer|string|string|null: false, foreign_key: true|string|integer|integer|integer|
|integer|string|string|null: false, foreign_key: true|string|integer|integer|integer|
|integer|string|string|null: false, foreign_key: true|string|integer|integer|integer|


### Association
- has_many :comments
- has_many :members
- has_many :groups, through: :members


## commentsテーブル
|id|Column|Options|type|user_id|member_id|group_id|
|--|------|-------|----|-------|---------|--------|
|integer|text|null: false, foreign_key: true|string|integer|integer|integer|
|integer|text|null: false, foreign_key: true|string|integer|integer|integer|
|integer|text|null: false, foreign_key: true|string|integer|integer|integer|

### Association
- belongs_to :user


## groupsテーブル
|id|Group-name|type|Options|user_id|comemnts_id|member_id|
|--|----------|----|-------|-------|-----------|---------|
|integer|text|null: false, foreign_key: true|string|integer|integer|integer|
|integer|text|null: false, foreign_key: true|string|integer|integer|integer|
|integer|text|null: false, foreign_key: true|string|integer|integer|integer|


### Association
- has_many :users, through: members
- has_many :comments
- has_many :members


## memberテーブル
|id|Options|type|comments-id|user_id|group_id|
|--|-------|----|-------|-----------|-------|--------|
|integer|null: false, foreign_key: true|integer|string|integer|integer|
|integer|null: false, foreign_key: true|integer|string|integer|integer|
|integer|null: false, foreign_key: true|integer|string|integer|integer|

### Association
- has_many :users
- belongs_to :group
- has_many :comments, through: ,users

end