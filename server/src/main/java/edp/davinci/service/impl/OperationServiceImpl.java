package edp.davinci.service.impl;

import edp.davinci.dao.DavinciStaticOperationMapper;
import edp.davinci.model.User;
import edp.davinci.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OperationServiceImpl implements OperationService {

    @Autowired
    private DavinciStaticOperationMapper davinciStaticOperationMapper;
    @Override
    public int selVisitNumByName(User user) {
        return davinciStaticOperationMapper.selVisitNumByName(user.getUsername());
    }

    @Override
    public int selDownNumByName(User user) {
        return davinciStaticOperationMapper.selDownNumByName(user.getUsername());
    }

    @Override
    public int selLoginNumByName(User user) {
        return davinciStaticOperationMapper.selLoginNumByName(user.getUsername());
    }
}
