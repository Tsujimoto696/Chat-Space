class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]

  def index
  end

  def new
    @group = Group.new #@groupはGroupモデルの新しいインスタンス
    @group.users << current_user #現在ログイン中のユーザーを、新規作成したグループに追加
  end

  def create
    @group = Group.new(group_params)
      if @group.save
        redirect_to root_path, notice: 'グループを作成しました'
      else
        render :new
      end
  end
  #すでに作成済みのグループに新規ユーザーが入ろうとしてエラーメッセージではなくページが出る

  def edit
    # 部分テンプレート「_group_form.html.haml」内で使用する変数
    # groups#newがリクエストされた際に渡すことで、グループ編集画面にて、既に参加しているメンバーを始めから表示させる
    @users = @group.users.where.not(id: current_user.id)
  end

  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

  def set_group
    @group = Group.find(params[:id])
  end
end